export const MoreInfoItem = ({key, infoName, mainInfo, icon: Icon }) => {
    return <li key={key}>
        <p>{infoName}</p>
        <p>{mainInfo}</p>
        {Icon && <Icon/>}
    </li>
}