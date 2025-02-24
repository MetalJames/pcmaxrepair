type ReviewProps = {
    postedon: string;
    review: string;
    name: string;
}

export const ReviewCard = ({ postedon, review, name }: ReviewProps) => (
    <div className="w-[80%] m-auto">
        <div className="flex sm:flex-col lg:flex-row flex-row sm:items-start lg:items-center items-center mb-2">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <title>{`Star ${i + 1}`}</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                ))}
            </div>
            <h3 className="ml-2 text-sm font-semibold text-gray-900">{postedon}</h3>
        </div>
        <p className="mb-2 font-light text-gray-500">{review}</p>
        <h3 className="font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4">- {name}</h3>
    </div>
);