function BackgroundSelector() {
    return (
        <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5">
            <h1 className="text-lg">BackgroundSelector</h1>

            <div>
                <img
                    src="https://64.media.tumblr.com/728cf21657c5e41c4806f3667e735dc3/7bdb6c2b53dbcbea-f8/s640x960/f1401576987fa523b42cc187af132f2aaf6d1db0.gif"
                    alt=""
                    className="rounded-2xl"
                />
            </div>

            <button className="backdrop-blur bg-white/10 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5">
                Choose Background
            </button>

            <select name="" id="" className="rounded-lg text-black">
                <option value="" className="">
                    🤖🤖🤖
                </option>
                <option value="">background 2</option>
                <option value="">background 3</option>
            </select>
        </div>
    );
}

export default BackgroundSelector;
