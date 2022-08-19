import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';

const Phone = (props) => {
  const { phone } = props;
  return (
    <div className='phone'>
      <div className='phone__icon'>
      <LocalPhoneSharpIcon/>
      </div>
      <a className='phone__number' href={`tel:${phone}`}>
        +38{phone}
      </a>
    </div>
  );
};

export default Phone;
