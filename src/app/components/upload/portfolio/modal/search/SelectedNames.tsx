import TeamMate from './TeamMate';

const SelectedNames = ({ selectedNames }: { selectedNames: string[] }) => {
  return (
    <div>
      {selectedNames.map((name, index) => (
        <TeamMate
          key={index}
          imageURL="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
          nickName={name}
        />
      ))}
    </div>
  );
};
export default SelectedNames;
