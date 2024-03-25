import React, { useCallback, useEffect, useState } from 'react'
import User from './User'
import './styles.css'

function GithubFinder() {

    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName('');
        }

        console.log(data);
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData()
    }, []);

    if (loading) {
        return <h1>Loading Data. Please Wait...</h1>
    }

    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input name='search-by-username'
                    type='text'
                    placeholder='Search by username'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button className='input-wrapper2' onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div >
    )
}

export default GithubFinder
