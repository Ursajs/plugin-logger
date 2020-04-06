// import Logger from './logger';
import ConsoleTransport from './transports/console';
import FileTransport from './transports/file';
import FileBufferTransport from './transports/fileBuffer';
import UrsaLogger from './logger/ursaLogger';
import ContextLogger from './logger/contextLogger';

const Logger = new UrsaLogger();

export default Logger;
export {
    Logger,
    ConsoleTransport,
    FileBufferTransport,
    FileTransport,
    UrsaLogger,
    ContextLogger,
};
