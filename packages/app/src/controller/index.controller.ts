import  { BaseController, Result } from '@ursajs/core';
import * as path from 'path';
import { UrsaLogger } from '@ursajs/logger';
const logger = UrsaLogger.init({
    level: 'ALL',
    consoleLevel: 'ALL',
    encoding: 'utf-8',
    file: path.resolve(__dirname, '../../log/logger.log')
});
export default class Index extends BaseController {
    index() {
        logger.debug('debug');
        logger.info('info GET');
        logger.warn('warn');
        logger.error('error');
        this.ctx.logger.error('this is plugin-logger logger error');
        return Result.json({
            msg: 'success',
            data: 'this is data',
        });
    }
}
