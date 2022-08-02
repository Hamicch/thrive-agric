const ProfileCard = ({ profile, organisation }) => {
    return (
        <div data-testid='prof-card'>
            <div className='flex justify-center'>
                {/* Avatar image */}
                <img
                    className='w-56 h-56 border border-gray-800 rounded-full shadow-md'
                    src={profile?.avatar_url}
                    alt=''
                />
            </div>
            <div className='px-8 py-5'>
                <h4 className='text-2xl font-bold text-white'>
                    {profile?.name}
                </h4>
                <p className='text-xl text-[#8b949e]'>{profile?.login}</p>
                <div className='my-5'>
                    <p className='flex text-base py-2 text-[#8b949e]'>
                        Organisations:{" "}
                        <span className='flex items-center ml-2 gap-x-2'>
                            {organisation?.map((org) => (
                                <a href={org.url} target='_blank'>
                                    <img
                                        src={org?.avatar_url}
                                        className='w-5 h-5 border border-gray-800 rounded-full shadow-md'
                                    />
                                </a>
                            ))}
                        </span>
                    </p>
                    <p className='text-base text-[#8b949e]'>
                        Repositories: {profile?.public_repos}
                    </p>
                </div>

                <a href={profile?.html_url} target='_blank'>
                    <button className='inline-block w-full py-1 border border-gray-400 hover:border-gray-400 bg-[#238636]  hover:border-[#238636]/[.8] rounded-md font-medium text-white'>
                        View Profile
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
