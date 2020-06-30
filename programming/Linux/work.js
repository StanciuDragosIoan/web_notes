/*
    Cloud platform infrastructure

        we create a centOS image

        we use Ansible to add php + extensions + other 
        tooling for development

        finally we automate everything with Jenkins and
        make it add the source code from KAT too


    OBS:
        The Jenkins machine creation is made through a ticket

        Teraform using  = part of a VM Creation (instead of using
        the interface, the centOS image has it)

        we can give Jenkins Teraform cmds too 

        in jenkins we can set up jobs (e.g. make it start a new
        job when we merge in dev branch for instance - to recreate the VM
        with the latest code)

        jenkins uses roles (each yaml calls roles, in the 
        role file we see what is being installed)

        story 941 for docs/links (PPT)

        go/din (se face prin do it now)

        te autentifici cu userul tau, selectezi contul:

        KAT_A7006_DEV (asta imi da acces in zona de servicii - /catalog)

        merg la Compute/OS factory pt crearea de imagine (zona de servicii)

        type de orchestrator (ansible_playbook)

        pentru playground folosim doitnow (go/din) + documentatia din 
        ticket

        play with teraform at least 4 hrs unti november
*/
