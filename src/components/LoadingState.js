const Loading = () => {
    return (
        <div
            data-testid='spinner'
            className='flex justify-center items-center w-full pt-40'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-700'></div>
        </div>
    );
};

export default Loading;
