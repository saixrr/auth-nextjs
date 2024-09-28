export default function userProfile({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page <span className="p-2 rounded bg-black-500 text-white">{params.id}</span></p>
        </div>
    )
}