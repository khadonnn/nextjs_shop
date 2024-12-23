import useHorizontalScroll from "../hook/useHorizontalScroll";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import CategoriesScroll from "@/components/CategoriesScroll";

const Categories = async () => {
    const wixClient = await wixClientServer();
    const cats = await wixClient.collections.queryCollections().find();
    // const scrollRef = useHorizontalScroll<HTMLDivElement>();
    return (
        <CategoriesScroll className='overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide mx-4'>
            <div className='flex gap-4 md:gap-8 '>
                {cats.items.map((item) => (
                    <Link
                        key={item._id}
                        href={`/list?cat=${item.slug}`}
                        className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
                    >
                        <div className='relative bg-slate-100 w-full h-96 '>
                            <Image
                                src={
                                    item.media?.mainMedia?.image?.url ||
                                    "cat.png"
                                }
                                alt=''
                                fill
                                sizes='50vw'
                                className='object-cover'
                            />
                        </div>
                        <h1 className='mt-8 font-light text-xl tracking-wide'>
                            {item.name}
                        </h1>
                    </Link>
                ))}
            </div>
        </CategoriesScroll>
    );
};

export default Categories;
