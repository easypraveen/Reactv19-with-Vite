import React from "react";

function Avatar({ name, imageUrl, size = "md" }) {
  const sizeValidate = (size) => {
    switch (size) {
      case "sm":
        return `w-32 h-32`;
      case "md":
        return `w-48 h-48`;
      case "lg":
        return `w-64 h-64`;
      default:
        break;
    }
  };

  const userName = name.trim().split(" ");
  const firstWord = userName[0]?.[0] || "";
  const lastWord = userName[1]?.[0] || "";
  const finalWords = firstWord + lastWord;
  const sizeClass = sizeValidate(size);
  const imageClass = `${sizeClass} rounded-full inline-block object-fill`;
  const textClass = `${sizeClass} bg-gray-400 text-white rounded-full justify-center items-center flex text-2xl font-bold uppercase`
  return (
    <div className="mt-4">
      {imageUrl && (<img src={imageUrl} alt={name} className={imageClass} />)}
      {!imageUrl && (<p className={textClass}>{finalWords}</p>)}
    </div>
  );
}

export default Avatar;
