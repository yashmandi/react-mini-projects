import { useState } from "react";
import Button from "./Button";

function Joke() {

    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchApi = () => {
        setLoading(true);
        fetch("https://sv443.net/jokeapi/v2/joke/Dark?type=single")
            .then((res) => res.json())
            .then((data) => {
                setJoke(data.joke);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching joke:", error);
                setLoading(false);
            });
    };

    return (
        <div className="py-2 justify-center text-center align-middle items-center">
            <Button  callApi={fetchApi}></Button>
            {loading ? (
                <p className="text-2xl font-bold mb-4">Loading...</p>
            ) : (
                <p className="text-2xl font-semibold mb-4">{joke}</p>
            )
            }
        </div >
    )
}

export default Joke
