import OpenAI from 'openai';
import { OPEN_AI } from './constant';

const openai = new OpenAI({
  apiKey:OPEN_AI , // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai;