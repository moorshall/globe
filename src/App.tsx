import { useEffect, useState } from "react";
import Globe from "./Globe";

function App() {
    const [ip, setIp] = useState("");
    const [geoData, setGeoData] = useState<GeoIpResponse>();

    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.ip);
                setIp(data.ip);
            })
            .catch((error) => {
                console.log("Error fetching IP address:", error);
            });
    }, []);

    useEffect(() => {
        if (ip) {
            fetch(`http://ip-api.com/json/${ip}`)
                .then((response) => {
                    if (response.ok) return response.json();
                    throw new Error("Network response was not ok.");
                })
                .then((data) => {
                    console.log(data);
                    setGeoData(data);
                })
                .catch((error) => {
                    console.error("There was a problem with your fetch operation:", error);
                });
        }
    }, [ip]);

    return (
        <div className="container">
            <Globe ip={ip} geoData={geoData} />
        </div>
    );
}

export default App;
