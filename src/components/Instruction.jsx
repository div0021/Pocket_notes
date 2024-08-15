import { useContextState } from '../hooks/useContextState'

const Instruction = () => {

  const {selectedGroup} = useContextState();
  return (
    <div className={`w-full h-screen justify-center items-center ${selectedGroup.length === 0 ? 'flex' : 'hidden'}`}>
    <div className='flex justify-center items-center flex-col space-y-4'>
    <img src='./initail.png' alt='img'/>

    <h1 className=' text-4xl font-bold'>
        Pocket Notes
    </h1>
    <p className='px-3 lg:px-0'>
    Send and receive messages without keeping your phone online. <br />
    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
    </p>

    </div>
    </div>
  )
}

export default Instruction