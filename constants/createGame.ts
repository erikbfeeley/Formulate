export abstract class CreateGameConstants {
    static readonly COMMAND_NAME = 'creategame'
    static readonly COMMAND_DESC = 'Create a new game'
    static readonly DM_OPTION = 'dm';
    static readonly DM_DESC = 'DM for the game'
    static readonly ROLE_OPTION = 'role';
    static readonly ROLE_DESC = 'Role to be added for accepted application'
    static readonly REPLY = 'The game was successfully created!'
}

export abstract class CreateGameThreadConstants{
    static readonly DISCUSSION_THREAD_NAME = "Discussion and Questions for "
    static readonly APPLICATION_THREAD_NAME = "Applications for "
}

export abstract class CreateGameEmbedConstants{
    static readonly EMBED_COLOR = "#9B59B6"
    static readonly FOOTER = 'Chief of Operations, at your service!'
    static readonly DM = "DM"
    static readonly GAME_DETAILS = "Game Details"
    static readonly APPLICATION = "Application"
}

export abstract class ApplyGameButtonConstants{
    static readonly ID = "apply-to-game"
    static readonly TITLE = "Apply to this game"
}

export abstract class AcceptApplicationButtonConstants{
    static readonly ID = "accept-application"
    static readonly TITLE = "Accept"
}

export abstract class RejectApplicationButtonConstants{
    static readonly ID = "reject-application"
    static readonly TITLE = "Reject"
}

export abstract class CreateGameModalConstants{
    static readonly ID = "create-game"
    static readonly MODAL_TITLE = 'Create a new game'
    static readonly NAME_ID = 'gameName';
    static readonly NAME_LABEL = 'Game Name'
    static readonly DESC_ID = 'gameDesc';
    static readonly DESC_LABEL = 'Tell us a little about the game'    
    static readonly TEMPLATE_ID = 'gameTemplate';
    static readonly TEMPLATE_LABEL = 'Fill out this template'   
    static readonly QUESTIONS_ID = 'gameQuestions';
    static readonly QUESTIONS_LABEL = 'Player Application'
}

export abstract class ApplyToGameModalConstants{
    static readonly ID = "apply-to-game-modal"
    static readonly MODAL_TITLE = 'Apply to '
    static readonly REPLY = 'You have successfully applied to this game!'
}

export abstract class GameApplicationEmbedConstants{
    static readonly EMBED_COLOR = "#B4CEA7"
    static readonly FOOTER = 'Chief of Operations, at your service!'
    static readonly TITLE = 'New Application for '
    static readonly DESC = 'Sumbitted by '
}