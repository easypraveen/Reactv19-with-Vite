function Card({title, content, footer, bgColor, textColor, border}){
    let borderClass = border ? 'border-2 border-gray-400':'border-none';

   return(
    <div className={`${borderClass} ${bgColor} w-1/4 mt-4 p-4 rounded`}>
      <h2 className={`text-2xl font-medium pb-4 ${textColor}`}>{title}</h2>
      <p>{content}</p>
      <p className="flex justify-end mt-4">{footer}</p>
    </div>
   )
}

export default Card;