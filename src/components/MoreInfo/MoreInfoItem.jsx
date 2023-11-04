import {MainInfo, InfoName} from './MoreInfo.styled'

export const MoreInfoItem = ({infoName, mainInfo, icon: Icon }) => {
    return <>
        <InfoName>{infoName}</InfoName>
        <MainInfo pad={Icon}>{mainInfo}</MainInfo>
        {Icon && <Icon size={80} />}
    </>
}