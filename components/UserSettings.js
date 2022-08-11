const UserSettings = () => {
    return ( 
        <div className="user-settings__container flex justify-center items-center cursor-pointer">
            <div>
                <p>Jon Jackson</p>
                <p className="text-blue-200 text-xs">Company name</p>
            </div>
            <img className="ml-2" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/bx-chevron-down_2___VlIixDiV.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659538792788" alt="arrow down" />
        </div>
     );
}
 
export default UserSettings;