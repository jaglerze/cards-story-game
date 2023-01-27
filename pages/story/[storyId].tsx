import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'
import { relative } from "node:path/posix";
export default function StoryCards() {
    const [storys, setStorys] = useState<Array>([])
    const [image, setImage] = useState("")
    const [health, setHealth] = useState(100)
    const [day,setDay] = useState("")
    const router = useRouter()
    const storyId = router.query.storyId
    var armut = "kavun"
    
    useEffect(() => {
        // Perform localStorage action

        let newObject = window.localStorage.getItem("myObject");
        setStorys(JSON.parse(newObject));

        console.log(storys[storyId] !== undefined ? storys[storyId].btn1mean : "")
        switch (storys[storyId] !== undefined ? storys[storyId].btn1mean : "") {
            case 1:
                setDay("aa")
                break;
            case 2:
                setDay("abc")
                break;
            case 3:
                setDay("efc")
                break;
        }
    },[])
    console.log(day)

    return (
        <main className={styles.main}>
            {storys[storyId] !== undefined ? storys[storyId].btn1mean : ""}
            <div className="flex justify-center">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg" src={storys[storyId] !== undefined ? storys[storyId].image : "data:image/svg+xml;base64,+++CjxwYXRoIGQ9Ik05Mi4yNDMyIDMuODUyMDVIODcuMjUzNFYyOC4zNzk4SDEwMC4zMDhWMjMuOTI4N0g5Mi4yNDMyVjMuODUyMDVaIiBmaWxsPSIjMUIxQTE5Ii8++Cjwvc3ZnPgo="} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{storys[storyId] !== undefined ? storys[storyId].title : ""}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {storys[storyId] !== undefined ? storys[storyId].story : ""}
                        </p>
                    </div>
                    <hr></hr>
                    <div className="container pl-12 py-8">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <button onClick={() => setHealth(health - 15 )} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                    <i className={storys[storyId] !== undefined ? storys[storyId].button1 : ""}></i>
                                </button>
                            </div>
                            <div>
                                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                    <i className={storys[storyId] !== undefined ? storys[storyId].button2 : ""} ></i>
                                </button>
                            </div>
                            <div>
                                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                    <i class={storys[storyId] !== undefined ? storys[storyId].button3 : ""}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4" style={{ paddingLeft: "42px" }}>
                <div className="text-right">
                    <i class="fa-solid fa-heart fa-2x"></i>
                </div>
                <div>
                    <div class="w-80 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-red-600 rounded-full dark:bg-blue-500" style={{ width: `${health}%` }}>health</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4" style={{ paddingLeft: "42px" }}>
                <div className="text-right">
                    <i class="fa-solid fa-burger fa-2x"></i>
                </div>
                <div>
                    <div class="w-80 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-amber-600 rounded-full dark:bg-blue-500" style={{ width: "32%" }}>32</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4" style={{ paddingLeft: "42px" }}>
                <div className="text-right">
                    <i className="fa-solid fa-droplet fa-2x"></i>
                </div>
                <div>
                    <div class="w-80 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-blue-500 rounded-full dark:bg-blue-500" style={{ width: "100%" }}>100</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4" style={{ paddingLeft: "42px" }}>
                <div className="text-right">
                    <i class="fa-solid fa-bolt fa-2x"></i>
                </div>
                <div>
                    <div class="w-80 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-green-600 rounded-full dark:bg-blue-500" style={{ width: "76%" }}>76</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4" style={{ paddingLeft: "42px" }}>
                <div className="text-right">
                    <i class="fa-solid fa-ghost fa-2x"></i>
                </div>
                <div>
                    <div class="w-80 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-black rounded-full dark:bg-blue-500" style={{ width: "15%" }}>15</div>
                    </div>
                </div>
            </div>
        </main>
    )
}