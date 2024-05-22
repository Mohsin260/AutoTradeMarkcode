import { useState, useEffect } from 'react'
import { fetchCarBrands } from '../../../actions/inventory';
import Image from 'next/image';
import Link from 'next/link';
import FiltersDropdown from './FiltersDropdown';


const MakeModelDropdown = () => {
    const [carBrands, setCarBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCarBrands();
            setCarBrands(data);
        };

        fetchData();
    }, []);


    return (
        <>
            <FiltersDropdown title="Make & Model">
                {carBrands.map((brand) => (
                    <li className="bg-white" key={brand._id}>
                        <FiltersDropdown style={{ backgroundColor: "#eaebec" }} title={
                            <>
                                <label className="flex items-center justify-center gap-2 pl-2">
                                    <Image src={brand.imgSrc} width={27} height={27} alt={brand.brandName} />
                                    {brand.brandName}<small className='m-[-2px] text-gray-400'>({brand.brandCount})</small>
                                </label>
                            </>
                        }>
                            <ul className="sub-group-list all-model-list border-gray mx-auto w-full border bg-white">
                                {brand.modelList && brand.modelList.map((model, _id) => (
                                    <>
                                        <li className="single-model border-gray flex w-full justify-center border-b py-2 hover:bg-[#f3f3f3]">Select All
                                        </li>
                                        <li className="single-model border-gray flex w-full justify-center border-b py-2 hover:bg-[#f3f3f3]" key={_id}>
                                            <Link href={`/inventory/ModelID/${_id}`} title={model} rel="nofollow">
                                                {model}
                                            </Link>          
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </FiltersDropdown>
                    </li>
                ))}
            </FiltersDropdown>
        </>

    )
}

export default MakeModelDropdown


