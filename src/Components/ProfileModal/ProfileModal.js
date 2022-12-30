import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();



  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="flex flex-col justify-center gap-3">
        <h3 className="text-center text-xl font-semibold">Your info</h3>

        <div className="flex justify-around gap-2">
          <div><input
            type="text"
            className="border text-center rounded-lg border-green-400"
            name="name"
            placeholder="your name"
          /></div>

          <div>
          <input
            type="text"
            className="border text-center rounded-lg border-green-400"
            name="email"
            placeholder="email address"
          />
          </div>
        </div>

        <div className="flex justify-center gap-5">
            <div>
            <input
            type="text"
            className="border text-center rounded-lg border-green-400"
            name="address"
            placeholder="Adress"
          />
            </div>
            <div>
            <input
            type="text"
            className="border text-center rounded-lg border-green-400"
            name="country"
            placeholder="Country"
          />
            </div>
        </div>

        <div className="flex justify-center items-center">
          <input
            type="text"
            name="university"
            className="border  text-center rounded-lg border-green-400"
            placeholder="university"
          />
        </div>
        <button className="button flex mx-auto p-2 w-1/2">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
