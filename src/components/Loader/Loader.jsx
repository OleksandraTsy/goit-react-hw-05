import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Audio
        height="60"
        width="60"
        radius="9"
        ariaLabel="loading"
        color="#00273e"
        wrapperStyle={{
          marginTop: '20px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
  }}
      />
    </>
  );
}