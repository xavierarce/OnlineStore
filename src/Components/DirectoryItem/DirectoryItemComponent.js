import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBodyContainer,
} from "./DirectoryItem.style.jsx";

const DirectoryItem = ({category}) => {
  const {imageUrl, title, route} = category

  const navitageTo = useNavigate()
  const handleNavigateTo = () => navitageTo(route)

  return (
    <DirectoryItemContainer onClick={handleNavigateTo}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Show Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
