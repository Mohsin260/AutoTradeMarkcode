import { useState } from 'react';
import { Transition } from '@headlessui/react';


type FiltersDropdownProps = {
    id: string;
    title: any;
    children: any;
    style: any;
    className: any;
  };

  const FiltersDropdown: React.FC<FiltersDropdownProps> = ({ id, title, children, style, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };

    return (
        <div className="panel-head filter-options my-1 bg-blue-100" style={style}>
            <div className="nav-tab" role="navigation">
                <ul className="nav__list ">
                    <li className="nav__item">
                        <button
                            onClick={toggleDropdown}
                            className="flex w-full max-w-full justify-between gap-5 py-3.5 pl-3.5 shadow-sm"
                        >
                            <div className="text-sm font-bold leading-5 text-blue-950">{title}</div>
                            <div className={`ease-out-in mr-5 transform transition duration-700 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
                                {isOpen ? '-' : '+'}
                            </div>
                        </button>
                        <Transition
                            show={isOpen}
                            enter="transition ease-out duration-700"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-700"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <ul className="w-full bg-white shadow-sm">
                                {children}
                            </ul>
                        </Transition>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FiltersDropdown