provider "aws" {
    region = "us-east-2"
}

resource "aws_instance" "kb_instance" {
    ami = "ami-0c55b159cbfafe1f0"
    instance_type = "t2.micro"
    vpc_security_group_ids = [aws_security_group.instance.id]
    key_name = "private"

    tags = {
        Name = "kanbanner"
    }
}

resource "aws_security_group" "instance" {
    name = "terraform-instance"

    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }

    ingress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }

    ingress {
        from_port = 3000
        to_port = 3000
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }

    egress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }

    egress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = [ "0.0.0.0/0" ]
    }
}

resource "aws_key_pair" "private" {
    key_name = "private"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCDHFcWE30Dgs1vwhbl0OBWVErdXHTpaeYAdotVwzNCm1dvaAbLMB7b9W4MvtNcE9dina/+ABmDsbb15O2vO+9Bdt/4DKG6kwCRKFb0pglfJIuQFm5EaHBrPv55wNZ8iAhnnij9yiG1SgyC5iwjISIo50nJGcIrRlj2dDQKuQGtzs8uAc7rCRIKaQzpQaE5Qotpn6bq8PT/Lj1Ch3gcbzRxx3czpK4k96UgyksqrlF1hdWkjdwe5n0f85lkZttDMToN6rooLf0sD1J0SGo9HOgeDxH3oMtARqfZeui9G9c/6Jss/uDN/HRlaZctNnWtplFstPkxdeRbzxtAe5caSa1l"
}
