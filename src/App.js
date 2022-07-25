import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyState from "./components/EmptyState";
import Loading from "./components/LoadingState";
import ProfileCard from "./components/ProfileCard";
import RepositoryCard from "./components/RespositoryCard";
import Search from "./components/Search";
import Logo from "./img/github_finder.svg";
import {
    fetchUserReposAction,
    fetchUserProfileAction,
    fetchUserOrganisationAction,
} from "./redux/slice/gitHubSlices";

const App = () => {
    const [user, setUser] = useState("whizkydee");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserReposAction(user));
        dispatch(fetchUserProfileAction(user));
        dispatch(fetchUserOrganisationAction(user));
    }, [user, dispatch]);

    const store = useSelector((state) => state?.repos);
    const { loading, organisation, repos, profile, error } = store;
    console.log("ORG", organisation);

    const handleChange = (e) => {
        setUser(e?.target?.value);
        console.log("USEr", user.length);
    };

    return (
        <>
            <section className='relative 2xl bg-[#0d1117] min-h-screen'>
                <div className='relative container px-4 mx-auto'>
                    <div className='text-center'>
                        {/* Logo */}
                        <div className='flex justify-center pt-10'>
                            <img
                                className='md:w-1/3  w-1/2 rounded-lg object-cover'
                                src={Logo}
                                alt='github_finder'
                            />
                        </div>

                        {/* input */}
                        <div className='mx-auto mt-4 px-4 flex justify-center'>
                            <Search onChange={handleChange} value={user} />
                        </div>
                    </div>

                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <h2 className='flex justify-center items-center text-center mt-48 px-28 font-medium text-red-600'>
                            {error?.data?.message}
                        </h2>
                    ) : user.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className='max-w-fit mx-auto mt-10'>
                            <div className='flex flex-wrap'>
                                {/* Profile card */}
                                <div className='w-full lg:w-1/3  lg:mb-0'>
                                    <ProfileCard
                                        profile={profile}
                                        organisation={organisation}
                                    />
                                </div>
                                {/* Repository list */}
                                <div className='w-full lg:w-2/3 overflow-x-auto'>
                                    {repos?.name !== "Error" &&
                                        repos?.map((repo) => (
                                            <RepositoryCard
                                                repo={repo}
                                                key={repo?.id}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default App;
