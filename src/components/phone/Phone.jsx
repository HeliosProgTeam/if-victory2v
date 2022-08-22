
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';

const Phone = ({phone}) => {

  return (
    <div className='phone'>
      <div className='phone__icon'>
      <LocalPhoneSharpIcon/>
      </div>
      <a className='phone__number' href={`tel:${phone}`}>
        {phone}
      </a>
    </div>
  );
};

export default Phone;

