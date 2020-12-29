import { ISetting, SettingType } from '@rocket.chat/apps-engine/definition/settings';
import { AppSettingId } from '../enum/AppSettingId';

export const AppSettings: Array<ISetting> = [
	{
		id: AppSettingId.SALESFORCE_BOT_USERNAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Bot Username',
		i18nDescription: 'Enter Omnichannel agent username we will be using as Salesforce Live Agent.',
		required: true,
	},
	{
		id: AppSettingId.SF_HANDOVER_DEPARTMENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Bot Department Name',
		i18nDescription: 'Enter Omnichannel department name containing Salesforce agent user.',
		required: true,
	},
	{
		id: AppSettingId.SALESFORCE_CHAT_API_ENDPOINT,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Chat Endpoint',
		i18nDescription:
			'To find this value, go to your Salesforce Dashboard -> Setup (In Gear Icon) -> Quick Find Search -> Search for chat setting -> Click on Chat Settings option -> Copy Chat API Endpoint value.',
		required: true,
	},
	{
		id: AppSettingId.SALESFORCE_ORGANISATION_ID,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Organization ID',
		i18nDescription:
			'To find this value, go to your Salesforce Dashboard -> Setup (In Gear Icon) -> Quick Find Search -> Search for company information -> Click on Company Information option -> Copy Salesforce.com Organization ID	value.',
		required: true,
	},
	{
		id: AppSettingId.SALESFORCE_DEPLOYMENT_ID,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Deployment ID',
		i18nDescription:
			'To find this value, go to your Salesforce Dashboard -> Setup (In Gear Icon) -> Quick Find Search -> Search for embedded service deployments -> Click on Embedded Service Deployments option -> Locate current chat group and click on View -> From Embedded Service Code Snippets option, click on Get Code -> Locate the value of deploymentId from Chat Code Snippet.',
		required: true,
	},
	{
		id: AppSettingId.SALESFORCE_BUTTON_ID,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Salesforce Button ID',
		i18nDescription:
			'To find this value, go to your Salesforce Dashboard -> Setup (In Gear Icon) -> Quick Find Search -> Search for embedded service deployments -> Click on Embedded Service Deployments option -> Locate current chat group and click on View -> From Embedded Service Code Snippets option, click on Get Code -> Locate the value of buttonId from Chat Code Snippet.',
		required: true,
	},
	{
		id: AppSettingId.CHATBOT_USERNAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Bot Username (Optional)',
		i18nDescription: 'Enter Omnichannel agent username we will be using as Dialogflow Bot.',
		required: false,
	},
	{
		id: AppSettingId.CB_HANDOVER_DEPARTMENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Bot Department Name (Optional)',
		i18nDescription: 'Enter Omnichannel department name containing Dialogflow Bot user.',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_ENABLE_END_EVENT,
		public: true,
		type: SettingType.BOOLEAN,
		packageValue: false,
		i18nLabel: 'Enable Dialogflow Events (Optional)',
		i18nDescription: 'Enabling this setting will automatically trigger a Dialogflow event based after the chat is ended with the agent. Please enter event name you want to cofigure in the following field(s).',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_AGENT_ENDED_CHAT_EVENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Agent Ended Chat Event Name (Optional)',
		i18nDescription: 'Enter the Dialogflow event name you want app to trigger as soon as the chat is sucessfully ended by agent.',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_AGENT_UNAVAILABLE_EVENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Agent Unavailable Event Name (Optional)',
		i18nDescription: 'Enter the Dialogflow event name you want app to trigger when the agent is not available for chat.',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_CUSTOMER_IDLE_TIMEOUT_EVENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Customer Idle Timeout Event Name (Optional)',
		i18nDescription: 'Enter the Dialogflow event name you want app to trigger when the customer idle timeout is triggered.',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_SESSION_ERROR_EVENT_NAME,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'Dialogflow Session Error Event Name (Optional)',
		i18nDescription: 'Enter the Dialogflow event name you want app to trigger when there is some issue connecting to Salesforce Liveagent.',
		required: false,
	},
	{
		id: AppSettingId.DIALOGFLOW_END_EVENT_LANGUAGE_CODE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'en',
		i18nLabel: 'Dialogflow End Chat Event Language Code (Optional)',
		i18nDescription: 'Enter the Dialogflow event language code you want app to trigger as soon as the chat is ended with agent.',
		required: false,
	},
	{
		id: AppSettingId.FINDING_LIVEAGENT_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'Finding an agent for you.',
		i18nLabel: 'Finding Live Agent Message',
		i18nDescription: 'Enter message to show to the user when the app starts looking for an active liveagent.',
		required: true,
	},
	{
		id: AppSettingId.LIVEAGENT_CHAT_ENDED_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'This session has been closed. Have a nice day.',
		i18nLabel: 'Live Agent Chat Ended Message',
		i18nDescription: 'Enter message to show to the user when liveagent ends chat session.',
		required: true,
	},
	{
		id: AppSettingId.LIVEAGENT_QUEUE_POSITION_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'No agent is available right now. Please wait for a while. Your queue position is: %s',
		i18nLabel: 'Live Agent Queue Position Message',
		i18nDescription: 'Enter message to show user his/her current position in the queue. %s wil be replaced by the user\'s queue position',
		required: true,
	},
	{
		id: AppSettingId.LIVEAGENT_QUEUE_EMPTY_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'An agent will be with you soon. Your queue position is: %s',
		i18nLabel: 'Live Agent Queue Empty Message',
		i18nDescription: 'Enter message to show when user is next up in the queue. %s wil be replaced by the user\'s queue position',
		required: true,
	},
	{
		id: AppSettingId.LIVEAGENT_NO_QUEUE_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'An agent will be with you soon.',
		i18nLabel: 'Live Agent No Queue Message',
		i18nDescription: 'Enter message to show when there is no queue and user is next up.',
		required: true,
	},
	{
		id: AppSettingId.NO_LIVEAGENT_AGENT_AVAILABLE_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'No agent available for chat right now.',
		i18nLabel: 'No Live Agent Available Message',
		i18nDescription: 'Enter message to show when there is no liveagent available to accept user request.',
		required: true,
	},
	{
		id: AppSettingId.TECHNICAL_DIFFICULTY_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'Sorry we are unable to complete your request right now.',
		i18nLabel: 'Technical Difficulty Message',
		i18nDescription: 'Enter message to show to user when there is some tehnical error.',
		required: true,
	},
	{
		id: AppSettingId.CUSTOMER_TIMEOUT_WARNING_MESSAGE,
		public: true,
		type: SettingType.STRING,
		packageValue: 'Are you still there? Please send a message within %t or this chat will time out.',
		i18nLabel: 'Customer Timeout Warning Message',
		i18nDescription: 'Enter message to show to user as idle timeout warning. Use %t as placeholder for count down.',
		required: true,
	},
	{
		id: AppSettingId.DEBUG_BUTTON,
		public: true,
		type: SettingType.BOOLEAN,
		packageValue: false,
		i18nLabel: 'Debug Mode',
		i18nDescription: 'This mode enables debug messages for your app.',
		required: false,
	},
];
