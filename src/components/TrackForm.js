import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

const { state: { name, recording, locations }
    , startRecording, stopRecording, changeName } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

return (
    <>
    <Spacer>
    <Input value={name} onChangeText={changeName} placeholder="Enter name" />
    </Spacer>
        <Spacer>
        {recording ? <Button buttonStyle={{ backgroundColor: '#e84a5f'}} title="Stop Recording" onPress={stopRecording} /> :
                     <Button buttonStyle={{ backgroundColor: '#e84a5f'}} title="Start Recording" onPress={startRecording} />
        }
        </Spacer>
         <Spacer>
        {
          !recording && locations.length
          ? (  <Button buttonStyle={{ backgroundColor: '#e84a5f'}} title="Save Recording" onPress={saveTrack} />
        ) : null
        }
        </Spacer>
    </>
)
}

export default TrackForm;
