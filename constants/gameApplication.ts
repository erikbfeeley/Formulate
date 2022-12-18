
export abstract class ApplyGameButtonConstants{
    static readonly ID = "apply-to-game"
    static readonly TITLE = "Apply to this game"
}

export abstract class AcceptApplicationButtonConstants{
    static readonly ID = "accept-application"
    static readonly TITLE = "Accept"
    static readonly PERMISSION = "AYO! You are SO NOT the DM!"
    static readonly MESSAGE_DM = "Application Accepted - "
    static readonly MESSAGE_PERSONAL = "Hey! Welcome to "
}

export abstract class RejectApplicationButtonConstants{
    static readonly ID = "reject-application"
    static readonly TITLE = "Reject"
    static readonly PERMISSION = "AYO! You are SO NOT the DM!"
    static readonly MESSAGE_DM = "Application Rejected - "
    static readonly MESSAGE_PERSONAL = "Sorry, the DM decided to go with someone else for "
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