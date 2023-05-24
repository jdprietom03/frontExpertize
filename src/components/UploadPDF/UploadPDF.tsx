import React, { useState, useRef } from "react";
import axios from "axios";
import { uploadCertification } from "../../api/certification";
import { Requirement } from "../../types/Types";

const UploadPDF: React.FC<{handleUpdate: () => void, availableRequirements: Requirement[] | undefined}> = ({ handleUpdate, availableRequirements }) => {
    const [file, setFile] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<string | ArrayBuffer | null>(
        null
      );
    const fileRef = useRef(null);
    const [technology, setTechnology] = useState<string>('1');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            if (selectedFile.type === "application/pdf") {
                setFile(selectedFile);
                setErrorMessage(null);

                const reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = () => {
                    setCurrentFile(reader.result as string);
                };
            } else {
                setFile(null);
                setErrorMessage("Please select a PDF file.");
            }
        }
    };

    const handleTechnologyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTechnology(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("requirement_id", technology as string);
            console.log(formData.get('requirement_id'));
            uploadCertification(formData)
            handleUpdate();
        }
    };

    const removeFile = (target:any) => {
        setFile(null);
        setCurrentFile(null);
        
        if(fileRef && fileRef.current) {
            fileRef.current.value = "";
        }
    };

    return (
        <>
        <div className="mt-8 mx-auto w-full max-w-md">
            <div className="bg-white py-8 px-4 shadow rounded-lg px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="technology" className="block text-lg font-medium text-gray-700">
                        Select Technology:
                    </label>
                    <div className="mt-1">
                        <select
                            id="technology"
                            name="technology"
                            onChange={handleTechnologyChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                            {
                                availableRequirements?.map(requirement => (<option value={requirement.id}>
                                    {requirement.name}
                                </option>))
                            }
                        </select>
                    </div>
                    <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
                        Select PDF:
                    </label>
                    <div className="mt-1">
                        <label>
                            <input type="file" className="text-sm text-grey-500
                                file:mr-5 file:py-2 file:px-6
                                file:rounded-full file:border-0
                                file:text-sm file:font-medium
                                file:bg-[#009879] file:text-white
                                hover:file:cursor-pointer hover:file:bg-[#0bb894]"
                                id="pdf"
                                name="pdf"
                                accept="application/pdf"
                                onChange={handleFileChange} 
                                ref={fileRef}
                                />
                        </label>

                        {errorMessage && (
                        <p className="mt-2 text-sm text-red-600" id="file-validation-error">
                            {errorMessage}
                        </p>
                        )}
                    </div>
                </div>    

                {currentFile && (
                     <embed src={currentFile.toString()} width="300" height="500" type='application/pdf'></embed>
                )}

                <div>
                <button
                    type="submit"
                    disabled={!file}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#009879] hover:bg-[#0bb894] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Upload
                </button>
                </div>
                <div>
                    {file && (
                        <button onClick={(event) => removeFile(event.target)}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FA654F] hover:bg-[#FAA69B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                    )}
                </div>
                
            </form>
            </div>
        </div>
        </>
    );
    };

    export default UploadPDF;
