/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {        
                             // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Dave"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1479121697599651999",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.0003, y: -1.6835 , z: -0.047365 },
                        scale: { x: 1.007, y: 1.007, z: 1.007},
                       
                    }}
                }
            });
             // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Dave"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1479121689211043996",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'hips'
                    },
                    transform: {local: {
                        position: { x: 0, y: -0.825 , z: -0.0213 },
                        scale: { x: 1.022, y: 1.022, z: 1.022},
                       
                    }}
                }
            });
                                         // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Dave"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact:1460971436632965447",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.0003, y: -1.69 , z: -0.047465 },
                        scale: { x: 1.012, y: 1.012, z: 1.012},
                       
                    }}
                }
            });
    }
}
}
}
}
