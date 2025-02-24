import { brandswecanfix } from '../../constants';

export const BrandsWeCanFix = () => (
    <div className='flex flex-col justify-center items-center lg:px-24 px-6 sm:py-16 py-6 bg-[#f0f8ff]'>
        <h2 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center pb-4'>Brands we can fix</h2>
        <div className='flex flex-row flex-wrap sm:justify-center justify-around sm:w-2/3 w-full lg:px-10 p-0'>
        {brandswecanfix.map((brandwecanfix) => (
            <div key={brandwecanfix.id} className='flex justify-center items-center sm:w-[25%] w-[45%] sm:h-[150px] h-[100px] p-2'>
                <img src={brandwecanfix.logo} alt={brandwecanfix.title} loading='eager' width={'auto'} height={'auto'} title={brandwecanfix.title} className='w-[150px]' />
            </div>
        ))}
        </div>
    </div>
)