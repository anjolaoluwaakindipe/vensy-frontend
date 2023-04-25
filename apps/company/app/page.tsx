import { AiOutlinePlus } from 'react-icons/ai';

function pages() {
    return (
        <div className=" pg-cont">
            <div className="h-[8vh] bg-white flex gen-p items-center justify-end space-x-4 shadow-md">
                <h1>Appointments</h1>
                <h1>Venues</h1>
                <h1>Settings</h1>
                <h1 className="text-pink-500">Logout</h1>
            </div>
            {/* Content */}
            <div className="gen-p py-10">
                <div className="w-full bg-white p-8 rounded-md space-y-10">
                    {/* Add new events */}
                    <div className="">
                        <button className='flex btn-main items-center justify-center space-x-3 w-max'><AiOutlinePlus/> <h1>Add Venue</h1></button>
                    </div>

                    {/* Upcoming Appointments */}
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-semibold'>Upcoming Appointments</h1>
                        
                        {/* Cards */}
                        <div className='flex overflow-scroll w-full'>
                            <div className='p-4 bg-blue-50 text-sm rounded-xl'>
                                <h1>Email:</h1>
                                <h1>Phone no:</h1>
                                <h1>Date:</h1>

                                <h1>From:</h1>
                                <h1>To:</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pages;