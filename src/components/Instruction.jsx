import { useContextState } from '../hooks/useContextState'

const Instruction = () => {

  const {selectedGroup} = useContextState();
  return (
    <div className={`w-full h-screen relative justify-center items-center ${selectedGroup.length === 0 ? 'flex' : 'hidden'}`}>
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
    <div className='absolute bottom-2 left-0 w-full flex justify-center items-center gap-x-3 text-sm font-normal text-[#292929]'>
    <img alt='lock' src='./lock.png' className='w-3 h-4'/>
    <span>
    end-to-end encrypted
    </span>
    </div>
    </div>
  )
}

export default Instruction