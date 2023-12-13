import React from 'react';

const Content = () => {
  return (
    <div>
      <section className='text-white bg-cover bg-center h-[70vh] w-[100%] bg-blend-overlay mx-auto bg-[#282829] flex justify-center items-center' style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg?w=1800&t=st=1702404404~exp=1702405004~hmac=82b059de1b3eb48695828e6e4e65c172a1a6fcfcdfe7329cd54b9c467f3dafcb")' }}>
        <div className='lg:w-[50%] w-[90%] text-center mx-auto'>
          <h1 className='lg:text-[3rem] text-[1.8rem] mb-4'>Manage your task with TaskTracker</h1>
          <p className='lg:text-[1.2rem] text-[1rem]'>Elevate your productivity with seamless task management! Effortlessly organize, prioritize, and conquer your to-do list. Experience the power of efficiency as you manage your tasks with precision. Take charge of your day – it&apos;s time to thrive with TaskTracker!</p>
        </div>
      </section>
      <section className='text-white my-12'>
        <div className='text-center'>
        <p className='text-[#4B80F7]'>Our Uniqueness</p>
        <h2>Features</h2>
        </div>
      </section>
    </div>
  );
}

export default Content;
