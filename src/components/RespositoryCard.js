const RepositoryCard = ({ repo }) => {
    return (
        <>
            <a
                data-testid='repocard'
                href={repo?.html_url}
                target='_blank'
                className='flex justify-between items-center py-3 px-8 border-t hover:bg-gray-900 cursor-pointer  border-gray-800'>
                <div>
                    <h4 className='text-xl text-[#58a6ff]'>{repo?.name}</h4>
                    <p className='text-sm text-[#8b949e] pt-1'>
                        {repo?.description}
                    </p>
                </div>
            </a>
        </>
    );
};

export default RepositoryCard;
