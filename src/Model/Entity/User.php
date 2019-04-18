<?php

declare(strict_types = 1);

namespace Model\Entity;

class User
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $login;

    /**
     * @var string
     */
    private $passwordHash;

    /**
     * @var Role
     */
    private $role;

    /**
     * @var string
     */
    private $email;

    /**
     * @param int $id
     * @param string $name
     * @param string $login
     * @param string $password
     * @param Role $role
     * @param string $email
     */
    public function __construct(int $id, string $name, string $login, string $password, Role $role, string $email = null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->login = $login;
        $this->passwordHash = $password;
        $this->role = $role;
        $this->email = $email;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getLogin(): string
    {
        return $this->login;
    }

    /**
     * @return string
     */
    public function getPasswordHash(): string
    {
        return $this->passwordHash;
    }

    /**
     * @return Role
     */
    public function getRole(): Role
    {
        return $this->role;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }
}
