import Logo from '../Images/Weather_AppLogo.webp';
function Header(props) {
    return (<>
        <header className="w-screen h-[110px] bg-[rgba(0,0,0,0.99)]" >
            <div id="logoContainer" className="h-1/2 w-full flex items-center pt-8 pl-4">
                <img src={Logo} alt="Website Logo" id="logo" className="h-[50px] rounded-[50%]  focus:ring focus:ring-blue-400" onClick={props.refresh} />
                <span className="text-[1.5rem] text-[whitesmoke] font-bold pl-[10px]" onClick={props.refresh}>MeghaLoom</span>
            </div>

            <div id="SearchMenu" className="w-full flex justify-center items-center" style={{ height: 'calc(110px - 55px)' }}>
                <input
                    type="search"
                    id="searchInput"
                    placeholder="Enter a Location"
                    className="h-[32px] w-[240px] rounded-[15px] pl-[10px] outline-none text-[1.1rem] border-none"
                    onChange={props.handleInput}
                    value={props.content}
                    onKeyDown={props.handleKeyDown}
                />
                <button id="searchBtn" className="bg-[rgba(7,7,7,0.947)] border-none" onClick={props.handleClick}>
                    <i className="fa fa-search text-white text-[1.5rem] cursor-pointer p-[10px] hover:text-[#6c6767]"></i>
                </button>
            </div>
        </header></>)
}

export default Header