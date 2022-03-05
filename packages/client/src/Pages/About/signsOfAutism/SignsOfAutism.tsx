
import signsContent from './signs.json';
import './signsOfAutism.css';
const SignsAndSymptoms = () => {
  return (
    <div className=' mx-10   main-card-container pb-10'>
      <h1 className='text-center text-48   font-roboto py-5  '>
        Signs of Autism
      </h1>

      <div className=' grid md:grid-cols-2 col-span-2 mx-20 gap-10 '>
        {signsContent.map((content) => (
          <div key={content.title} className='bg-white p-10   '>
            <h1 className='text-center text-25 font-ambit_bold'>
              {content.title}
            </h1>
            <p className='font-ambit_italic text-16 text-left'>
              {content.text}
            </p>
            <ul className='list-disc font-ambit_italic text-16 text-left'>
              {content.options.map((option) => (
                <li className=''>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignsAndSymptoms;
