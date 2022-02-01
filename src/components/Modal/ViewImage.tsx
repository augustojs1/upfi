import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element | null {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" autoFocus={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            borderRadius="3px"
            backgroundColor="pGray.800"
            p={0}
            max-width="900px"
            max-height="600px"
          >
            <Image
              src={imgUrl}
              alt="Fullscreen image"
              fit="cover"
              objectFit="cover"
              width="900px"
              height="600px"
            />
          </ModalBody>
          <ModalFooter
            backgroundColor="pGray.800"
            justifyContent="start"
            h="32px"
          >
            <Link href="http://localhost:3000/dog.png" onClick={onClose}>
              Abrir Original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
