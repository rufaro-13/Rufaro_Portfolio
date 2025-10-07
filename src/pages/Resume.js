import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaBuilding } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Resume() {

        const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }; 
  return (
    <div className='bg-darkpurple'>
        <section className="bg-cover bg-center bg-no-repeat   bg-blend-multiply pt-12 pb-8">

            <div className=" mt-2 lg:flex grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
                <p class="pl-4 font-normal text-lightpurple text-sm md:text-base">
                    
                    <b>My name is Rufaro Chiuta </b> and I am a software developer. I recently graduated with a Master's degree in Software 
                    Engineering and Information Processing from Algeria after having completed a bachelor's degree in Information Systems and 
                    Software Engineering in the same country. I am driven by the desire to be one of the people who bring automation and new sustainable
                    solutions to our problems.
                    </p>

            </div>


            <div className=" mt-2 pt-4 lg:flex grid  lg:grid-cols-3 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
                
                <div className="mx-2 md:mx-8 w-fit">

                </div>
                <div className="mx-2 md:mx-8 w-fit">

                    <h2 className="text-lg font-semibold text-white dark:text-white">Education</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 px-5">                  
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">09/2018 – 09/2021</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaUniversity  class="  my-1 ml-2"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">UNIVERSITE DE M'HAMMED BOUGARA BOUMERDES (UMBB)</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">BOUMERDES, ALGERIA</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">B.SC IN INFORMATION SYSTEMS AND SOFTWARE ENGINEERING</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(0)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Thesis</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 0 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex === 0 && (
                                    <div className="p-4 text-white">
                                    
                                        <p>
                                            <span className="text-base text-yello font-medium">Title</span >: Development of Android  Mobile Application for online shopping<br /><br/>
                                            <ul className='list-disc pl-8'>

                                                <li>Designed and developed a fully functional e-commerce Android mobile application with comprehensive shopping features</li>
                                                <li>Created UML diagrams (use case, class, sequence diagrams) for system architecture and design documentation</li>
                                                <li>Implemented hybrid database architecture using Firebase (NoSQL) for cloud-based data storage and SQLite for local data management</li>
                                                <li>Designed intuitive and user-friendly UI/UX interfaces to enhance customer shopping experience</li>
                                                <li>Developed the application using Java programming language in Android Studio IDE</li>
                                                <li>Demonstrated strong collaboration and teamwork skills through coordinated development and task distribution</li>

                                        

                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                         <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">11/2021 – 07/2023</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaBuilding class="  my-1 ml-2"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">UNIVERSITE DE M'HAMMED BOUGARA BOUMERDES (UMBB)</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">BOUMERDES, ALGERIA</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">M.SC IN INFORMATION PROCESSING AND SOFTWARE ENGINEERING</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(1)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Thesis</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 1 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex === 1 && (
                                    <div className="p-4 text-white">

                                        <p><span className="text-base text-yello font-medium">Title</span >: Developed a machine learning model that summarises Scientific Research Articles <br /><br/>
                                            <ul className='list-disc pl-8'>

                                                <li>Designed and implemented an extractive text summarization system for scientific research articles using natural language processing techniques</li>
                                                <li>Leveraged pre-trained BERT and SciBERT transformer models, fine-tuning them on domain-specific datasets from Hugging Face</li>
                                                <li>Developed the complete ML pipeline in Python, utilizing libraries for model training and text processing</li>
                                                <li>Conducted model training and experimentation using Google Colab for computational efficiency</li>
                                                <li>Applied collaborative development practices through Google Docs and Google Colab for team coordination and documentation</li>
                                                

                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                         <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">10/2023 – 07/2025</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaBuilding class="  my-1 ml-2"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">POZNAŃ UNIVERSITE OF ECONOMICS AND BUSINESS (PUEB)</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">POZNAŃ, POLAND</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">M.SC IN INNOVATION MANAGEMENT</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(2)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Thesis</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 2 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex === 2 && (
                                    <div className="p-4 text-white">
                                    
                                        <p>

                                            <ul className='list-disc pl-8'><span className="text-base text-yello font-medium">Title</span >: Impact of gamification on user engagement in Educational Software<br /><br/>

                                                Conducted comprehensive research investigating the effectiveness of gamification elements (points, badges, leaderboards, feedback mechanisms) on user engagement and learning outcomes in educational platforms

                                                <li>Performed comparative case study analysis of three major educational platforms (Alison, Duolingo, SAP SuccessFactors) examining their gamification strategies and implementation approaches</li>
                                                <li>Designed and executed quantitative research study with 104 participants, collecting and analyzing empirical data on user engagement patterns, motivation, and knowledge retention</li>
                                                <li>Conducted statistical analysis revealing significant correlations between gamification features and user behavior, including an 80% behavioral modification rate and paradoxical engagement-retention relationship</li>
                                                <li>Applied mixed-methods research methodology combining theoretical analysis, case studies, and survey-based empirical investigation using statistical software for data analysis</li>
                                                <li>Identified demographic variations in gamification effectiveness across gender and age groups, providing insights for inclusive educational technology design</li>
                                                <li>Provided strategic recommendations for ethical gamification implementation, addressing user manipulation concerns and promoting learner-centered design principles</li>
                                                <li>Demonstrated strong analytical, research design, and academic writing skills through comprehensive literature review and evidence-based conclusion development</li>
                                                

                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                    </ol>
                </div>


                <div className="mx-8 md:mx-8 w-1/2">

                    <h2 className="text-lg font-semibold text-white dark:text-white">Experience</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 px-5">                  
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">09/2021 - 09/2022</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaBuilding class="  my-1 ml-"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">CENTRE D’ÉTUDES ET DE SERVICES TECHNOLOGIQUES DE L’INDUSTRIE DES MATÉRIAUX DE CONSTRUCTION (CETIM)</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">BOUMERDES, ALGERIA</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">JUNIOR SOFTWARE ENGINEER (INTERN)</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(3)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Responsibilities</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 3 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex === 3 && (
                                    <div className="p-4 text-white">
                                    
                                        <p>

                                            <ul className='list-disc pl-8'>
                                                <li>Developing a j2ee web application for the management of IT equipment at the enterprise</li>
                                                <li>Data collection and processing</li>
                                                <li>Collaborated with team members to design the user interface</li>
                                                <li>Debugging front-end and backend issues</li>
                                                <li>Maintenance of the web application and database</li>
                                                <li>Documentation</li>
                                                <li>Testing and Quality Assurance</li>
                                        
                                                <li>Collaboration with cross-functional teams</li>


                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                         <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">09/2022 – 09/2023</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaBuilding class="  my-1 ml-2"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">ROBBOTECH SOFTWARES</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">ZIMBABWE</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">JUNIOR SOFTWARE ENGINEER</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(4)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Responsibilities</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 4 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex === 4 && (
                                    <div className="p-4 text-white">
                                    
                                        <p>

                                            <ul className='list-disc pl-8'>
                                                <li>Developed, deployed, hosted, and managed web applications ensuring optimal functionality and user experience</li>
                                                <li>Optimized website and application performance, accessibility, and responsiveness across multiple devices and browsers</li>
                                                <li>Collaborated with cross-functional team members to deliver projects efficiently and meet established deadlines</li>
                                                <li>Prepared comprehensive technical documentation including Use Case Diagrams, Class Diagrams, Sequence Diagrams, and textual descriptions for all products</li>
                                                <li>Implemented CI/CD pipelines and tools to streamline development workflows and automate deployment processes</li>
                                                <li>Debugged and resolved front-end and back-end issues to maintain application stability and performance</li>
                                                <li>Conducted thorough testing and quality assurance to ensure code reliability and adherence to standards</li>
                                                <li>Participated in code reviews to maintain code quality, share knowledge, and improve team development practices</li>
                                                <li>Contributed to open source projects, demonstrating commitment to the developer community</li>
                                                <li>Conducted user research and gathered feedback to inform product development decisions</li>
                                                <li>Integrated user feedback into the development process to enhance product usability and satisfaction</li>
                                                
                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                         <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yello dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-yello dark:text-yello">06/2024 - CURRENT</time>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '15px', padding:'2px 2px' }}>
                                                        
                                    <FaBuilding class="  my-1 ml-2"/>  
                                    <h3 class="text-sm font-semibold text-white dark:text-white">NEWELL BRANDS</h3>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <div className='flex items-center'>
                                <IconContext.Provider value={{ color: 'silver', size: '18px', padding:'2px 2px' }}>
                                                        
                                    <IoLocation class="  my-1 ml-2"/>  
                                    <h5 class="text-sm font-light text-white dark:text-white">POZNAŃ, POLAND</h5>
                                                        
                                </IconContext.Provider> 
                            </div>
                            <p class="mb-4 text-sm font-normal ml-2 text-white dark:text-yello">CONSUMER SERVICE REPRESENTATIVE</p>

                                <div className="border rounded mb-2">
                                    <button
                                    className="w-full bg-text-yello text-left p-4 focus:outline-none"
                                    onClick={() => toggleAccordion(5)}
                                    >
                                    <div className="flex justify-between items-center">
                                    <span className="text-base text-yello font-medium">Responsibilities</span>
                                    <span className="transform transition-transform">
                                    {activeIndex === 5 ? (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                        </svg>
                                        ) : (
                                        <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="yellow"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                        </svg>
                                        )}
                                    </span>
                                </div>
                                    </button>
                                    {activeIndex ===5 && (
                                    <div className="p-4 text-white">
                                    
                                        <p>

                                            <ul className='list-disc pl-8'>
                                                <li>Respond to consumers' queries through email, chat, phone, social media channels</li>
                                                <li>Data and information management in various CRM systems</li>
                                                <li>Order creation and support using Salesforce and SAP</li>
                                                <li>Collaborate with team members in various projects that improve daily processes.</li>
                                                <li>Assist in the development of training materials and documentation</li>
                                                <li>Participate in team meetings and contribute to project planning</li>
                                                <li>Continuously seek to improve processes and workflows</li>
                                                <li>Provide training and support to new team members</li>


                                            </ul>
                                        </p>

                                    </div>
                                    )}
                                </div>

                        </li>
                    </ol>
                </div>

            </div>

        </section>
   

    </div>
  )
}

export default Resume