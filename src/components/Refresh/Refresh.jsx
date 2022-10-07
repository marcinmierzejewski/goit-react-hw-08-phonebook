import { ThreeDots } from 'react-loader-spinner';
// import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Refresh = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
