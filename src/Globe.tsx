export default function Globe({ ip, geoData }: { ip: string; geoData: GeoIpResponse | undefined }) {
    return (
        <div className="globe-container">
            <p>You are here</p>
            <p>{ip}</p>
            <p>
                {geoData?.city}, {geoData?.regionName}
            </p>
            <p>{geoData?.country}</p>
            <p>
                {geoData?.lat}, {geoData?.lon}
            </p>
        </div>
    );
}
