import {workflowSteps} from "../constants/index.js";


const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">My Workflow as a Front-end Developer Intern</h3>

            <div className="client-container">
                {workflowSteps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-[#1C1C1C] rounded-lg p-8 transition-all hover:bg-[#252525]"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <step.icon className="w-8 h-8 text-blue-800"/>
                                <h3 className="text-xl font-semibold text-white">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                            <div className="pt-4">
                                <p className="text-gray-400 text-sm">
                                    <span className="font-semibold text-blue-800">Example:</span> {step.example}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;