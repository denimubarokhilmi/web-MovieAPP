const callAPi = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGIxOGM4ZmM5MGI2ZTU3ZGNiMGE4MGZkZTY5OTAzNyIsIm5iZiI6MTc0MTM4OTMyMC45NjUsInN1YiI6IjY3Y2I3ZTA4ZTk0NjFhZGY0MTRmNjc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VAo_I8JdV5zFde1DAHLZg9yDioXQ5tTPM0ZwFqq6kNE',
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw response
        };
        return response.json();

    } catch (error) {
        throw error;
    }
};

export default callAPi;