import React, { useRef } from 'react';

export default function ImageUploader() {
  const uploadInputRef = useRef(null);
  const filenameLabelRef = useRef(null);
  const imagePreviewRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      filenameLabelRef.current.textContent = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviewRef.current.innerHTML = `<img src="${e.target.result}" class="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
        imagePreviewRef.current.classList.remove('border-dashed', 'border-2', 'border-gray-400');

        // Add event listener for image preview only once
        if (!imagePreviewRef.current.hasEventListener) {
          imagePreviewRef.current.addEventListener('click', () => {
            uploadInputRef.current.click();
          });
          imagePreviewRef.current.hasEventListener = true;
        }
      };
      reader.readAsDataURL(file);
    } else {
      filenameLabelRef.current.textContent = '';
      imagePreviewRef.current.innerHTML = `<div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">No image preview</div>`;
      imagePreviewRef.current.classList.add('border-dashed', 'border-2', 'border-gray-400');

      // Remove the event listener when there's no image
      if (imagePreviewRef.current.hasEventListener) {
        imagePreviewRef.current.removeEventListener('click', () => {
          uploadInputRef.current.click();
        });
        imagePreviewRef.current.hasEventListener = false;
      }
    }
  };

  const handleUploadButtonClick = () => {
    uploadInputRef.current.click();
  };

  return (
    <section className="container w-1/2 mx-auto items-center py-32">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
        <div className="px-4 py-6">
          <div ref={imagePreviewRef} className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
            <input
              ref={uploadInputRef}
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="upload" className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
              <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
              <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
              <span ref={filenameLabelRef} className="text-gray-500 bg-gray-200 z-50"></span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer" onClick={handleUploadButtonClick}>
                <span className="text-center ml-2">Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
