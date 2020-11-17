interface IProfil{
    userInfos: {[key: string]: string},
    setInfos: (value: {[key: string]: string}) => void
};

export default IProfil;