export default function Home() {
    
    //get list of pages
    //sort list
    // 

    return (
        <main className='flex flex-col'>
            <h1 className='text-2xl pb-7'>
                My latest work, both personal and professional
            </h1>
            <div className='block text-lg pb-7 lg:flex lg:gap-2 w-1/2'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                </p>
            </div>

            <div className='flex flex-wrap'>
                <div className='flex-initial w-1/2'>article 1</div>
                <div className='flex-initial w-1/2'>article 2</div>
                <div className='flex-initial w-1/2'>article 3</div>
                <div className='flex-initial w-1/2'>article 4</div>
            </div>
        </main>
    );
}
